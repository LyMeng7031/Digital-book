// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
// import { JwtPayloadInput } from "../types/user";

// export const roleCheck = (allowedRoles: string[]) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const authHeader = req.headers.authorization;
//       if (!authHeader?.startsWith("Bearer ")) {
//         return res
//           .status(401)
//           .json({ message: "Unauthorized: No token provided" });
//       }

//       const token = authHeader.split(" ")[1];
//       const secret = process.env.JWT_SECRET!;
//       const decoded = jwt.verify(token, secret) as JwtPayloadInput;
//       // CRITICAL: Rebuild req.user with ONLY these fields – hides iat/exp forever
//       const sanitizedUser = {
//         id: decoded?.userId,
//         role: decoded.role,
//         email: decoded.email,
//         userName: decoded.userName,
//         // If more fields in payload/response, add here: e.g., firstName: decoded.firstName
//       };

//       if (!allowedRoles.includes(decoded.role)) {
//         return res
//           .status(403)
//           .json({ message: "Forbidden: Insufficient role" });
//       }

//       (req as any).user = decoded;
//       next();
//     } catch (error) {
//       return res.status(401).json({ message: "Unauthorized: Invalid token" });
//     }
//   };
// };
// // create role middleware here then go to define routes for Admin
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayloadInput } from "../types/user";

export const roleCheck = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader?.startsWith("Bearer ")) {
        return res
          .status(401)
          .json({ message: "Unauthorized: No token provided" });
      }

      const token = authHeader.split(" ")[1];
      const secret = process.env.JWT_SECRET!;
      const decoded = jwt.verify(token, secret) as JwtPayloadInput;

      // ✅ Properly sanitize and attach user data
      const sanitizedUser = {
        userId: decoded.userId, // <-- changed to userId
        role: decoded.role,
        email: decoded.email,
        userName: decoded.userName,
      };

      // ✅ Save sanitized user info in request (not raw decoded token)
      (req as any).user = sanitizedUser;

      // ✅ Role check
      if (!allowedRoles.includes(sanitizedUser.role)) {
        return res.status(403).json({
          message:
            "Forbidden: You do not have the required role to access this resource",
        });
      }

      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  };
};
