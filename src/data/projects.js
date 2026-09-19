import nexoraPreview from "../assets/images/projects/nexora-home.png";

// Add future projects by importing an image above and appending one
// object below — the Projects section renders straight from this array,
// no JSX changes required.
//
// Shape:
// {
//   id: string                — unique, used as the React key
//   name: string               — project name (e.g. "Nexora")
//   subtitle: string            — one-line positioning (e.g. "Full-Stack E-Commerce Platform")
//   description: string        — 2–4 sentence, technically concrete summary
//   image: imported asset      — screenshot shown in the browser-frame preview
//   imageAlt: string           — descriptive alt text for that screenshot
//   liveUrl: string | null     — live demo link, or null if none
//   githubUrl: string | null   — repo link, or null if none
//   stack: string[]            — focused tech list (keep it short, not 20 badges)
//   highlights: [{ icon, label, detail }]  — 3–5 verified technical details.
//     `icon` must be a key that exists in components/common/Icons.jsx.
//   featured: boolean          — true = rendered with the full flagship layout.
//     Only one featured project is shown right now. A secondary layout for
//     non-featured projects doesn't exist yet — see Projects/index.jsx.
// }
export const projects = [
  {
    id: "nexora",
    name: "Nexora",
    subtitle: "Full-Stack E-Commerce Platform",
    description:
      "Nexora is a full-stack e-commerce platform covering the complete commerce flow — product discovery with search and filtering, authentication, cart and wishlist, checkout with real Razorpay payments, order management, and a role-protected admin system for products, users, coupons and customer messages.",
    image: nexoraPreview,
    imageAlt: "Nexora e-commerce storefront home page, showing the product hero and navigation",
    liveUrl: "https://nexora-ecommerce-psi.vercel.app/",
    githubUrl: "https://github.com/mr-faheem/nexora-ecommerce",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Razorpay", "Cloudinary", "Vercel"],
    highlights: [
      { icon: "user", label: "Auth", detail: "JWT + role-based access" },
      { icon: "check", label: "Payments", detail: "Razorpay + signature verification" },
      { icon: "route", label: "Commerce", detail: "Cart, wishlist, checkout & orders" },
      { icon: "briefcase", label: "Admin", detail: "Products, users, orders & coupons" },
      { icon: "database", label: "Data & Media", detail: "MongoDB/Mongoose + Cloudinary" },
    ],
    featured: true,
  },
];