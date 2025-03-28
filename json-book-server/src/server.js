const jsonServer = require('json-server');
const auth = require('json-server-auth');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv'); // Load environment variables
const slugify = require("slugify"); // For generating slugs
const cors = require('cors');
const fs= require('fs');

dotenv.config(); // Load .env file (if present)
const permissions = require('./protected-routes.json');

console.log('permissions',permissions);


const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const routesFile = './routes.json';
if (fs.existsSync(routesFile)) {
  const routes = require(routesFile);
  server.use(jsonServer.rewriter(routes)); // Apply routes.json if found
  console.log('Custom routes loaded from routes.json');
} else {
  console.log('routes.json not found, skipping custom routes');
}


//server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.db = router.db;
server.use('/api/users',auth);

const pathMatcher={
  exact: (reqPath, routePath) => reqPath=== routePath|| reqPath+"/"===routePath,
  contains: (reqPath, routePath) => reqPath.includes(routePath),
  startsWith: (reqPath, routePath) => reqPath.startsWith(routePath),
  endsWith: (reqPath, routePath) => reqPath.endsWith(routePath)
}

// Enable json-server-auth


const checkAccess= (request)=>{
  let {path, method, user}=request;
  let response = 200; //allowed
  for(let rule of permissions){
    //1. match method
    console.log('rule',rule);
    
    if(!rule.methods.includes(method))
      continue; //this rule doesn't apply

    //2. match path
    let matchType= rule.match||'contains';
    if(!pathMatcher[matchType](path.toLowerCase(), rule.path.toLowerCase()))
      continue; //this rule doesn't apply

    //3. match role
    if(!user )
      return 401; //unauthorized
    if( rule.roles==="user" || rule.roles.includes("user") || user.roles.some(role=>rule.roles.includes(role)))
      return 200;
    else
      return 403;

  }

  return 200; //allowed
}

server.use((req, res, next) => {
  setTimeout(() => next(), 500); // 500ms delay
});

// Middleware to extract user from JWT and attach to req.user
server.use((req, res, next) => {
  const token = req.headers.authorization;
  
  if (token) {
    try {
      //const decoded = jwt.verify(token.replace('Bearer ', ''), "json-server-auth-secret");
      const decoded = jwt.decode(token.replace('Bearer ', '')) // "json-server-auth-secret");
      const user = router.db.get('users').find({ email: decoded.email }).value();
      console.log('decoded',decoded);
      
      console.log('user',user);
      
      if (user) {
        req.user = user; // Attach user to request
      }
    } catch (err) {
      console.error('Token verification failed:');
    }
  }

  next();
});

server.use((req, res, next) => {
  console.log('req.path',req.path);
  
  //const path = Object.keys(permissions).find(route => req.path.startsWith(route));
  //const path= permissions.find(route=> req.path.startsWith(route.path));
  //console.log('auth path',path);

  let accessResult = checkAccess(req);
  if(accessResult===200)
    next();
  else if(accessResult===401)
    res.status(401).json({ message: 'Unauthorized' });
  else
   res.status(403).json({ message: 'Forbidden' });
 
});

// Middleware to generate slug-based IDs for books and authors
server.use((req, res, next) => {
  if (req.method === "POST") {
    if (req.path === "/books" && req.body.title) {
      req.body.id = slugify(req.body.title, { lower: true, strict: true });
    }
    if (req.path === "/authors" && req.body.name) {
      req.body.id = slugify(req.body.name, { lower: true, strict: true });
    }
  }
  next();
});

server.use((req, res, next) => {
  if (req.method === "POST" && req.path === "/books") {
    const db = router.db; // Access the database
    const bookTitle = req.body.title;
    const authorId = req.body.authorId;

    if (!bookTitle) {
      return res.status(400).json({ error: "Book title is required" });
    }

    if (!authorId) {
      return res.status(400).json({ error: "Author ID is required" });
    }

    // Generate slug-based ID for book
    const bookId = slugify(bookTitle, { lower: true, strict: true });

    // Check for duplicate book ID
    const existingBook = db.get("books").find({ id: bookId }).value();
    if (existingBook) {
      return res.status(400).json({ error: "Duplicate Title/ID" });
    }

    // Check if authorId exists in the authors collection
    const authorExists = db.get("authors").find({ id: authorId }).value();
    if (!authorExists) {
      return res.status(400).json({ error: "Invalid author ID" });
    }

    // Assign the slugified ID to the book
    req.body.id = bookId;
  }
  next();
});





server.use('/api',router);
server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});
