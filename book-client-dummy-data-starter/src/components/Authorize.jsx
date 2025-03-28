export default function Authorize({ userRoles, allowedRoles, children }) {
    const hasAccess = userRoles.some((role) => allowedRoles.includes(role));
    return hasAccess ? children : null;
  }
  