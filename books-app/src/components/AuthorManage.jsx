import { useState } from "react";
import AuthorDetails from "./AuthorDetails";
import AuthorList from "./AuthorList";

const authorsDb=[
    {
        "id": "mahatma-gandhi",
        "name": "Mahatma Gandhi",
        "bio": "Mohandas Karamchand 'Mahatma' Gandhi (2 October 1869 – 30 January 1948), venerated as the Mahatma[a], was an Indian lawyer,[3] anti-colonial nationalist[4] and political ethicist[5] who employed nonviolent resistance to lead the successful campaign for India's independence from British rule[6] and in turn inspired movements for civil rights and freedom across the world. The honorific Mahātmā (Sanskrit: \"great-souled\", \"venerable\"), first applied to him in 1914 in South Africa, is now used throughout the world.[7][8]        Born and raised in a Hindu family in coastal Gujarat, Gandhi trained in law at the Inner Temple, London, and was called to the bar at age 22 in June 1891. After two uncertain years in India, where he was unable to start a successful law practice, he moved to South Africa in 1893 to represent an Indian merchant in a lawsuit. He went on to live in South Africa for 21 years. It was in South Africa that Gandhi raised a family and first employed nonviolent resistance in a campaign for civil rights. In 1915, aged 45, he returned to India. He set about organising peasants, farmers, and urban labourers to protest against excessive land-tax and discrimination. Assuming leadership of the Indian National Congress in 1921, Gandhi led nationwide campaigns for easing poverty, expanding women's rights, building religious and ethnic amity, ending untouchability, and above all for achieving swaraj or self-rule.[9]",
        "primaryWorks": [
           "The Story of My Experiments with Truth"
        ],
        "tags": [
           "Gujarati",
           "Autobiography",
           "Philosophy",
           "India"
        ],
        "photo": "https://pbs.twimg.com/profile_images/185517358/mahatmagandhi_400x400.jpg",
        "social": null
     },
     {
        "id": "jawaharlal-nehru",
        "name": "Jawaharlal Nehru",
        "bio": "Jawaharlal Nehru (1889–1964) was an Indian independence activist and the first Prime Minister of India. He was a central figure in Indian politics before and after independence.",
        "primaryWorks": [
           "The Discovery of India",
           "Glimpses of World History"
        ],
        "tags": [
           "English",
           "History",
           "Politics",
           "India"
        ],
        "photo": "https://pbs.twimg.com/profile_images/1111631560288153602/3cWR8aK7_400x400.jpg",
        "social": null
     },
     {
        "id": "vivek-dutta-mishra",
        "name": "Vivek Dutta Mishra",
        "bio": "Vivek, by profession, is a Software Technology Enabler—a self-professed title. In this role, he enables the software companies to develop better software designs, build robust architecture, and most importantly, make effective software professionals. With over two decades of experience as a speaker, influencer and educator, his impressive clientele includes the likes of TCS, Mercedes, GE, Mindtree, CISCO, HP, JPMorgan, BNP Paribas, Honeywell, L&T, Walmart, Siemens, Capgemini … But long before associating with software technology, he has been passionate about Indian history and epics and did an extensive study on the subject. Armed with a firm conviction about the superiority of ancient pre-historic literature, over history, he has scripted and directed stage shows such as Ramlila to show various perspectives of the great epic. This series and its inspiration come both from the frustration of the systematic condemnation of our superior Indian culture and a sense of duty to stand it.",
        "primaryWorks": [
           "The Accursed God"
        ],
        "tags": [
           "English",
           "Historical Fiction",
           "Mythology",
           "India"
        ],
        "photo": "https://m.media-amazon.com/images/S/amzn-author-media-prod/2fuqj5h433n56ucdr3s5j1k2j9._SY450_CR0%2C0%2C450%2C450_.jpg",
        "social": {
           "twitter": "https://twitter.com/vivek_mishra",
           "facebook": "https://www.facebook.com/vivekduttamishra"
        }
     },
     {
        "id": "alexandre-dumas",
        "name": "Alexandre Dumas",
        "bio": "Alexandre Dumas (born Dumas Davy de la Pailleterie ([dymɑ davi də la pajət(ə)ʁi]), 24 July 1802 – 5 December 1870),[1][2] also known as Alexandre Dumas père (where père is French for 'father', to distinguish him from his son Alexandre Dumas fils), was a French writer. His works have been translated into many languages and he is one of the most widely read French authors. Many of his historical novels of high adventure were originally published as serials, including The Count of Monte Cristo, The Three Musketeers, Twenty Years After and The Vicomte of Bragelonne: Ten Years Later. His novels have been adapted since the early twentieth century into nearly 200 films.Prolific in several genres, Dumas began his career by writing plays, which were successfully produced from the first. He also wrote numerous magazine articles and travel books; his published works totalled 100,000 pages.[3] In the 1840s, Dumas founded the Théâtre Historique in Paris.",
        "primaryWorks": [
           "The Three Musketeers",
           "The Count of Monte Cristo"
        ],
        "tags": [
           "French",
           "Historical Fiction",
           "Adventure"
        ],
        "photo": "https://cdn.vocabulary.com/units/h3ekjthk/author.jpg?width=400&v=176fc5c134d",
        "social": null
     },
     {
        "id": "jk-rowling",
        "name": "J.K. Rowling",
        "bio": "Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL (/ˈroʊlɪŋ/ ROH-ling;[1] born 31 July 1965), better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,[2][3] becoming the best-selling book series in history.[4] The books are the basis of a popular film series, over which Rowling had overall approval on the scripts[5] and was a producer on the final films.[6] She also writes crime fiction under the pen name Robert Galbraith. Born in Yate, Gloucestershire, Rowling was working as a researcher and bilingual secretary for Amnesty International in 1990 when she conceived the idea for the Harry Potter series while on a delayed train from Manchester to London.[7] The seven-year period that followed saw the death of her mother, birth of her first child, divorce from her first husband, and relative poverty until the first novel in the series, Harry Potter and the Philosopher's Stone, was published in 1997. There were six sequels, of which the last was released in 2007. Since then, Rowling has written several books for adult readers: The Casual Vacancy (2012) and—under the pseudonym Robert Galbraith—the crime fiction Cormoran Strike series.[8] In 2020, her \"political fairytale\" for children, The Ickabog, was released in instalments in an online version.[9] Rowling has lived a \"rags to riches\" life in which she progressed from living on benefits to being named the world's first billionaire author by Forbes.[10] Rowling disputed the assertion, saying she was not a billionaire.[11] Forbes reported that she lost her billionaire status after giving away much of her earnings to charity.[12] Her UK sales total in excess of £238 million, making her the best-selling living author in Britain.[13] The 2021 Sunday Times Rich List estimated Rowling's fortune at £820 million, ranking her as the 196th richest person in the UK.[14] Time named her a runner-up for its 2007 Person of the Year, noting the social, moral, and political inspiration she has given her fans.[15] Rowling was appointed a member of the Order of the Companions of Honour (CH) in the 2017 Birthday Honours for services to literature and philanthropy. In October 2010, she was named the \"Most Influential Woman in Britain\" by leading magazine editors.[16] Rowling has supported multiple charities, including Comic Relief, One Parent Families, and Multiple Sclerosis Society of Great Britain, as well as launching her own charity, Lumos. Since late 2019, Rowling has publicly voiced her opinions on transgender people and related civil rights. These views have led to controversy.",
        "primaryWorks": [
           "Harry Potter series",
           "The Casual Vacancy"
        ],
        "tags": [
           "English",
           "Fantasy",
           "Young Adult",
           "United Kingdom"
        ],
        "photo": "https://pbs.twimg.com/profile_images/1883231711762292736/g9rnxUNC_400x400.jpg",
        "social": {
           "twitter": "https://twitter.com/jk_rowling"
        }
     },
     {
        "id": "james-clear",
        "name": "James Clear",
        "bio": "James Clear is an American author, entrepreneur, and speaker known for his expertise in habit formation and decision-making. He is best known for his book 'Atomic Habits,' which explores practical strategies for building good habits and breaking bad ones.",
        "primaryWorks": [
           "Atomic Habits"
        ],
        "tags": [
           "Self-Help",
           "Productivity",
           "Psychology",
           "Personal Development"
        ],
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/3f/James_Clear.jpg",
        "social": {
           "website": "https://jamesclear.com",
           "twitter": "https://twitter.com/JamesClear"
        },
        "photo": "https://www.caa.com/caaspeakers/partyHeadshot/james-clear.png"
     },
     {
        "id": "jeffrey-archer",
        "name": "Jeffrey Archer",
        "bio": "Jeffrey Howard Archer, Baron Archer of Weston-super-Mare (born 15 April 1940)[1] is an English novelist, former politician, convicted perjurer, and peer of the realm. Before becoming an author, Archer was a Member of Parliament (1969–1974), but did not seek re-election after a financial scandal that left him almost bankrupt.[2] He revived his fortunes as a best-selling novelist; his books have sold more than 320 million copies worldwide.[3]\nArcher became deputy chairman of the Conservative Party (1985–86), before resigning after a newspaper accused him of paying money to a prostitute. In 1987, he won a court case and was awarded large damages because of this claim.[4] He was made a life peer in 1992 and subsequently became Conservative candidate to be the first elected Mayor of London. He had to resign his candidacy in 1999 after it emerged that he had lied in his 1987 libel case. He was imprisoned (2001–2003) for perjury and perverting the course of justice, ending his elected political career.[3]",
        "primaryWorks": [
           "Kane and Abel",
           "Not a Penny More, Not a Penny Less"
        ],
        "tags": [
           "English",
           "Thriller",
           "Drama",
           "United Kingdom"
        ],
        "photo": "https://pbs.twimg.com/profile_images/3751745623/11bd5e198e1f0f7de40ffdf08f556293_400x400.jpeg",
        "social": {
           "twitter": "https://twitter.com/Jeffrey_Archer"
        }
     },
     {
        "id": "john-grisham",
        "name": "John Grisham",
        "bio": "John Ray Grisham Jr. ( born February 8, 1955) is an American novelist and attorney, best known for his popular legal thrillers. His books have been translated into 42 languages and published worldwide.Grisham graduated from Mississippi State University and received a J.D. degree from the University of Mississippi School of Law in 1981. He practiced criminal law for about a decade and served in the Mississippi House of Representatives from January 1984 to September 1990.[4] His first novel, A Time to Kill, was published in June 1989, four years after he began writing it. According to the Academy of Achievement his books have sold 300 million copies and he has written 28 consecutive number one bestsellers.[5] A Galaxy British Book Awards winner, Grisham is one of only three authors to sell two million copies on a first printing, the other two being Tom Clancy[6] and J. K. Rowling.[7] Grisham's first bestseller, The Firm, sold more than seven million copies.[2] The book was adapted into a 1993 feature film of the same name, starring Tom Cruise, and a 2012 TV series which continues the story ten years after the events of the film and novel.[8] Eight of his other novels have also been adapted into films: The Chamber, The Client, A Painted House, The Pelican Brief, The Rainmaker, The Runaway Jury, Skipping Christmas, and A Time to Kill.[9] Grisham's latest book (his 42nd published novel), A Time for Mercy, is his third story involving the characters established in A Time to Kill and further follows the story of Jake Brigance, a Mississippi small town lawyer representing a minor accused of murder.[10]",
        "primaryWorks": [
           "The Firm",
           "A Time to Kill"
        ],
        "tags": [
           "English",
           "Legal Thriller",
           "United States"
        ],
        "photo": "https://pbs.twimg.com/profile_images/1603812525270876163/qnx5yt5o_400x400.jpg",
        "social": {
           "twitter": "https://twitter.com/JohnGrisham"
        }
     }
]

   const AuthorManage = (props) => {
        const [selectedAuthor,selectAuthor] = useState(null);
        const [authors,updateAuthors]=useState(authorsDb)
    
        const handleAuthorSelect= author=>{
            
            selectAuthor(author);
        }
        const deleteAuthor=author=>{
            let restOfAuthors = authors.filter(b=> b.id!==author.id)
            updateAuthors(restOfAuthors)
            selectAuthor(restOfAuthors.length?restOfAuthors[0]:null);
        }

        console.log('selectedAuthor',selectedAuthor);
    
        return (
            <div className='BookManage'>
                <h2>Author Manager</h2>
                
                <div className="columnwise">
                    <div className='left'>
                        <AuthorList authors={authors} onAuthorSelect={handleAuthorSelect} />
                    </div>
                    <div className='right'>
                        {
                            selectedAuthor
                                ?<AuthorDetails selectedAuthor={selectedAuthor} onDelete={()=>deleteAuthor(selectedAuthor)}
                                    user={props.user} />
                                :<h3>Select a book to view details.</h3>
                        }
                    </div>
                </div>
            </div>
        )
    }
    




export default AuthorManage;