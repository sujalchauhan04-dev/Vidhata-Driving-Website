// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import {
//   Phone,
//   MapPin,
//   Car,
//   Bike,
//   RotateCcw,
//   Check,
//   Menu,
//   X,
// } from "lucide-react";

// // ---------------------------------------------------------------------------

// const COURSES = [
//   {
//     icon: Car,
//     title: "Four-wheeler",
//     desc: "Full car training from basics to highway driving, in a dual-control hatchback.",
//   },
//   {
//     icon: Bike,
//     title: "Two-wheeler",
//     desc: "Balance, gear control, and road sense for scooters and motorcycles.",
//   },
//   {
//     icon: RotateCcw,
//     title: "Refresher lessons",
//     desc: "Already have a license but need practice? Short, focused sessions to rebuild confidence.",
//   },
// ];

// const STEPS = [
//   {
//     n: "01",
//     title: "Book your slot",
//     desc: "Call or WhatsApp to pick a timing that works around your day.",
//   },
//   {
//     n: "02",
//     title: "Learn with L-plates",
//     desc: "Practice on quiet roads first, then move to real traffic conditions.",
//   },
//   {
//     n: "03",
//     title: "RTO test prep",
//     desc: "Mock tests and reversing, parking, and signal practice before your exam.",
//   },
//   {
//     n: "04",
//     title: "Get licensed",
//     desc: "Walk into your RTO test ready, and drive on your own.",
//   },
// ];

// const WHY = [
//   "Certified instructor, Rajesh Chauhan",
//   "Dual-control car for safe learning",
//   "Flexible morning and evening slots",
//   "Affordable, transparent pricing",
// ];

// // ---------------------------------------------------------------------------

// function RoadDivider() {
//   return (
//     <div className="mx-auto flex max-w-5xl items-center gap-2 px-6">
//       <div className="h-[3px] flex-1 bg-[repeating-linear-gradient(to_right,#facc15_0_24px,transparent_24px_44px)]" />
//     </div>
//   );
// }

// export default function DrivingSchool() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <main className="min-h-screen bg-neutral-950 text-neutral-100">
//       {/* Nav */}
//       <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
//         <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
//           <span className="text-lg font-bold tracking-tight">
//             Vidhata <span className="text-red-500">Driving School</span>
//           </span>
//           <div className="hidden items-center gap-8 text-sm text-neutral-300 sm:flex">
//             <a href="#courses" className="hover:text-white">Courses</a>
//             <a href="#steps" className="hover:text-white">How it works</a>
//             <a href="#contact" className="hover:text-white">Contact</a>
//             <a
//               href="tel:+919898748020"
//               className="rounded-md bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-500"
//             >
//               Call now
//             </a>
//           </div>
//           <button
//             onClick={() => setMenuOpen((v) => !v)}
//             className="text-neutral-300 sm:hidden"
//             aria-label={menuOpen ? "Close menu" : "Open menu"}
//             aria-expanded={menuOpen}
//           >
//             {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </nav>
//         {menuOpen && (
//           <div className="flex flex-col gap-1 border-t border-neutral-800 px-6 py-4 text-sm text-neutral-300 sm:hidden">
//             <a href="#courses" onClick={() => setMenuOpen(false)} className="rounded-md px-2 py-2 hover:bg-neutral-900">Courses</a>
//             <a href="#steps" onClick={() => setMenuOpen(false)} className="rounded-md px-2 py-2 hover:bg-neutral-900">How it works</a>
//             <a href="#contact" onClick={() => setMenuOpen(false)} className="rounded-md px-2 py-2 hover:bg-neutral-900">Contact</a>
//             <a href="tel:+919898748020" className="mt-2 rounded-md bg-red-600 px-4 py-2 text-center font-medium text-white">Call now</a>
//           </div>
//         )}
//       </header>

//       {/* Hero */}
//       <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 sm:py-24 md:grid-cols-2">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs text-neutral-400">
//             <span className="h-2 w-2 rounded-full bg-red-500" />
//             Now taking new students · Porbandar
//           </span>
//           <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
//             Learn to drive,<br />the right way.
//           </h1>
//           <p className="mt-4 max-w-md text-neutral-400">
//             Vidhata Motor Driving School trains new drivers on real roads with
//             a dual-control car, patient instruction, and RTO test prep —
//             taught by Rajesh Chauhan.
//           </p>
//           <div className="mt-8 flex flex-wrap gap-3">
//             <a
//               href="tel:+919898748020"
//               className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
//             >
//               <Phone className="h-4 w-4" />
//               9898748020
//             </a>
//             <a
//               href="https://wa.me/919898748020"
//               className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-200 transition hover:bg-neutral-900"
//             >
//               WhatsApp us
//             </a>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.96 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="relative overflow-hidden rounded-2xl border border-neutral-800"
//         >
//           <Image
//             src="/car-front.jpg"
//             alt="Vidhata Driving School training car"
//             width={1040}
//             height={780}
//             className="h-full w-full object-cover"
//             priority
//           />
//         </motion.div>
//       </section>

//       <RoadDivider />

//       {/* Why choose us */}
//       <section className="mx-auto max-w-5xl px-6 py-16">
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
//           className="grid gap-4 sm:grid-cols-2"
//         >
//           {WHY.map((item) => (
//             <motion.div
//               key={item}
//               variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
//               className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-4"
//             >
//               <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600/15 text-red-500">
//                 <Check className="h-4 w-4" />
//               </span>
//               <span className="text-sm text-neutral-300">{item}</span>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* Courses */}
//       <section id="courses" className="mx-auto max-w-5xl px-6 py-16">
//         <h2 className="text-2xl font-bold sm:text-3xl">Courses we offer</h2>
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
//           className="mt-8 grid gap-6 sm:grid-cols-3"
//         >
//           {COURSES.map(({ icon: Icon, title, desc }) => (
//             <motion.div
//               key={title}
//               variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
//               whileHover={{ y: -4 }}
//               className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6"
//             >
//               <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/15 text-red-500">
//                 <Icon className="h-5 w-5" />
//               </span>
//               <h3 className="mt-4 font-semibold text-neutral-100">{title}</h3>
//               <p className="mt-2 text-sm leading-relaxed text-neutral-400">{desc}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       <RoadDivider />

//       {/* Steps */}
//       <section id="steps" className="mx-auto max-w-5xl px-6 py-16">
//         <h2 className="text-2xl font-bold sm:text-3xl">From first lesson to licensed</h2>
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
//           className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
//         >
//           {STEPS.map((step) => (
//             <motion.div
//               key={step.n}
//               variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
//             >
//               <span className="font-mono text-sm text-red-500">{step.n}</span>
//               <h3 className="mt-1 font-semibold text-neutral-100">{step.title}</h3>
//               <p className="mt-2 text-sm leading-relaxed text-neutral-400">{step.desc}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       <RoadDivider />

//       {/* Instructor + car */}
//       <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 md:grid-cols-2">
//         <motion.div
//           initial={{ opacity: 0, x: -16 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.5 }}
//           className="overflow-hidden rounded-2xl border border-neutral-800"
//         >
//           <Image
//             src="/car-back.jpg"
//             alt="Vidhata Driving School car with L-plates"
//             width={900}
//             height={1000}
//             className="h-full w-full object-cover"
//           />
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, x: 16 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-2xl font-bold sm:text-3xl">Trained by Rajesh Chauhan</h2>
//           <p className="mt-3 text-neutral-400">
//             Every lesson is one-on-one, on a Maruti Suzuki WagonR fitted with
//             L-plates and dual controls — so you're never learning alone, and
//             never at risk.
//           </p>
//         </motion.div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.5 }}
//           className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-10 text-center"
//         >
//           <h2 className="text-2xl font-bold sm:text-3xl">Ready to start driving?</h2>
//           <p className="mx-auto mt-3 max-w-md text-sm text-neutral-400">
//             Call or WhatsApp Rajesh Chauhan to book your first lesson.
//           </p>
//           <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
//             <a
//               href="tel:+919898748020"
//               className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
//             >
//               <Phone className="h-4 w-4" />
//               9898748020
//             </a>
//             <span className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-5 py-3 text-sm text-neutral-300">
//               <MapPin className="h-4 w-4" />
//               Porbandar, Gujarat
//             </span>
//           </div>
//         </motion.div>
//         <p className="mt-10 text-center text-xs text-neutral-600">
//           Vidhata Motor Driving School — Porbandar.
//         </p>
//       </section>
//     </main>
//   );
// }



//----------------------- update code chhe -----

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import {
//   Phone,
//   MapPin,
//   Car,
//   Check,
//   Menu,
//   X,
// } from "lucide-react";

// // ---------------------------------------------------------------------------

// const INCLUDED = [
//   "15 days course",
//   "10 km driving every day",
//   "Highway driving",
//   "Traffic driving",
//   "Parking practice",
//   "Complete car knowledge (controls, maintenance, safety)",
// ];

// const STEPS = [
//   {
//     n: "01",
//     title: "Book your slot",
//     desc: "Call or WhatsApp to pick a timing that works around your day.",
//   },
//   {
//     n: "02",
//     title: "Learn with L-plates",
//     desc: "Practice on quiet roads first, then move to real traffic conditions.",
//   },
//   {
//     n: "03",
//     title: "RTO test prep",
//     desc: "Mock tests and reversing, parking, and signal practice before your exam.",
//   },
//   {
//     n: "04",
//     title: "Get licensed",
//     desc: "Walk into your RTO test ready, and drive on your own.",
//   },
// ];

// const WHY = [
//   "RTO-recognized driving school",
//   "Certified instructor, Rajesh Chauhan",
//   "Dual-control car for safe learning",
//   "Flexible morning and evening slots",
// ];

// // ---------------------------------------------------------------------------

// function RoadDivider() {
//   return (
//     <div className="mx-auto flex max-w-5xl items-center gap-2 px-6">
//       <div className="h-[3px] flex-1 bg-[repeating-linear-gradient(to_right,#facc15_0_24px,transparent_24px_44px)]" />
//     </div>
//   );
// }

// export default function DrivingSchool() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <main className="min-h-screen bg-neutral-950 text-neutral-100">
//       {/* Nav */}
//       <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
//         <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
//           <span className="text-lg font-bold tracking-tight">
//             Vidhata <span className="text-red-500">Driving School</span>
//           </span>
//           <div className="hidden items-center gap-8 text-sm text-neutral-300 sm:flex">
//             <a href="#courses" className="hover:text-white">Course</a>
//             <a href="#steps" className="hover:text-white">How it works</a>
//             <a href="#contact" className="hover:text-white">Contact</a>
//             <a
//               href="tel:+919898748020"
//               className="rounded-md bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-500"
//             >
//               Call now
//             </a>
//           </div>
//           <button
//             onClick={() => setMenuOpen((v) => !v)}
//             className="text-neutral-300 sm:hidden"
//             aria-label={menuOpen ? "Close menu" : "Open menu"}
//             aria-expanded={menuOpen}
//           >
//             {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </nav>
//         {menuOpen && (
//           <div className="flex flex-col gap-1 border-t border-neutral-800 px-6 py-4 text-sm text-neutral-300 sm:hidden">
//             <a href="#courses" onClick={() => setMenuOpen(false)} className="rounded-md px-2 py-2 hover:bg-neutral-900">Course</a>
//             <a href="#steps" onClick={() => setMenuOpen(false)} className="rounded-md px-2 py-2 hover:bg-neutral-900">How it works</a>
//             <a href="#contact" onClick={() => setMenuOpen(false)} className="rounded-md px-2 py-2 hover:bg-neutral-900">Contact</a>
//             <a href="tel:+919898748020" className="mt-2 rounded-md bg-red-600 px-4 py-2 text-center font-medium text-white">Call now</a>
//           </div>
//         )}
//       </header>

//       {/* Hero */}
//       <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 sm:py-24 md:grid-cols-2">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs text-neutral-400">
//             <span className="h-2 w-2 rounded-full bg-red-500" />
//             Now taking new students · RTO-recognized · Porbandar
//           </span>
//           <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
//             Learn to drive,<br />the right way.
//           </h1>
//           <p className="mt-4 max-w-md text-neutral-400">
//             Vidhata Motor Driving School is an RTO-recognized school that
//             trains new drivers on real roads with a dual-control car, patient
//             instruction, and RTO test prep — taught by Rajesh Chauhan.
//           </p>
//           <div className="mt-8 flex flex-wrap gap-3">
//             <a
//               href="tel:+919898748020"
//               className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
//             >
//               <Phone className="h-4 w-4" />
//               9898748020
//             </a>
//             <a
//               href="https://wa.me/919898748020"
//               className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-200 transition hover:bg-neutral-900"
//             >
//               WhatsApp us
//             </a>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.96 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="relative overflow-hidden rounded-2xl border border-neutral-800"
//         >
//           <Image
//             src="/car-front.jpg"
//             alt="Vidhata Driving School training car"
//             width={1040}
//             height={780}
//             className="h-full w-full object-cover"
//             priority
//           />
//         </motion.div>
//       </section>

//       <RoadDivider />

//       {/* Why choose us */}
//       <section className="mx-auto max-w-5xl px-6 py-16">
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
//           className="grid gap-4 sm:grid-cols-2"
//         >
//           {WHY.map((item) => (
//             <motion.div
//               key={item}
//               variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
//               className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-4"
//             >
//               <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600/15 text-red-500">
//                 <Check className="h-4 w-4" />
//               </span>
//               <span className="text-sm text-neutral-300">{item}</span>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* Course */}
//       <section id="courses" className="mx-auto max-w-5xl px-6 py-16">
//         <div className="flex items-center gap-3">
//           <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/15 text-red-500">
//             <Car className="h-5 w-5" />
//           </span>
//           <h2 className="text-2xl font-bold sm:text-3xl">Four-wheeler course</h2>
//         </div>
//         <p className="mt-3 max-w-xl text-sm text-neutral-400">
//           RTO-recognized car training: 15 days, 10 km of driving every day, in a
//           dual-control hatchback.
//         </p>
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
//           className="mt-8 grid gap-4 sm:grid-cols-2"
//         >
//           {INCLUDED.map((item) => (
//             <motion.div
//               key={item}
//               variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
//               className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-4"
//             >
//               <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600/15 text-red-500">
//                 <Check className="h-4 w-4" />
//               </span>
//               <span className="text-sm text-neutral-300">{item}</span>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       <RoadDivider />

//       {/* Steps */}
//       <section id="steps" className="mx-auto max-w-5xl px-6 py-16">
//         <h2 className="text-2xl font-bold sm:text-3xl">From first lesson to licensed</h2>
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
//           className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
//         >
//           {STEPS.map((step) => (
//             <motion.div
//               key={step.n}
//               variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
//             >
//               <span className="font-mono text-sm text-red-500">{step.n}</span>
//               <h3 className="mt-1 font-semibold text-neutral-100">{step.title}</h3>
//               <p className="mt-2 text-sm leading-relaxed text-neutral-400">{step.desc}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       <RoadDivider />

//       {/* Instructor + car */}
//       <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 md:grid-cols-2">
//         <motion.div
//           initial={{ opacity: 0, x: -16 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.5 }}
//           className="overflow-hidden rounded-2xl border border-neutral-800"
//         >
//           <Image
//             src="/car-back.jpg"
//             alt="Vidhata Driving School car with L-plates"
//             width={900}
//             height={1000}
//             className="h-full w-full object-cover"
//           />
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, x: 16 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-2xl font-bold sm:text-3xl">Trained by Rajesh Chauhan</h2>
//           <p className="mt-3 text-neutral-400">
//             Every lesson is one-on-one, on a Maruti Suzuki WagonR fitted with
//             L-plates and dual controls — so you&apos;re never learning alone, and
//             never at risk.
//           </p>
//         </motion.div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.5 }}
//           className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-10 text-center"
//         >
//           <h2 className="text-2xl font-bold sm:text-3xl">Ready to start driving?</h2>
//           <p className="mx-auto mt-3 max-w-md text-sm text-neutral-400">
//             Call or WhatsApp Rajesh Chauhan to book your first lesson.
//           </p>
//           <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
//             <a
//               href="tel:+919898748020"
//               className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
//             >
//               <Phone className="h-4 w-4" />
//               9898748020
//             </a>
//             <span className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-5 py-3 text-sm text-neutral-300">
//               <MapPin className="h-4 w-4" />
//               Porbandar, Gujarat
//             </span>
//           </div>
//         </motion.div>
//         <p className="mt-10 text-center text-xs text-neutral-600">
//           Vidhata Motor Driving School — Porbandar.
//         </p>
//       </section>
//     </main>
//   );
// }



"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Car,
  Check,
  Menu,
  X,
} from "lucide-react";

// ---------------------------------------------------------------------------

const INCLUDED = [
  "15 days course",
  "10 km driving every day",
  "Highway driving",
  "Traffic driving",
  "Parking practice",
  "Complete car knowledge (controls, maintenance, safety)",
];

const STEPS = [
  {
    n: "01",
    title: "Book your slot",
    desc: "Call or WhatsApp to pick a timing that works around your day.",
  },
  {
    n: "02",
    title: "Learn with L-plates",
    desc: "Practice on quiet roads first, then move to real traffic conditions.",
  },
  {
    n: "03",
    title: "RTO test prep",
    desc: "Mock tests and reversing, parking, and signal practice before your exam.",
  },
  {
    n: "04",
    title: "Get licensed",
    desc: "Walk into your RTO test ready, and drive on your own.",
  },
];

const WHY = [
  "RTO-recognized driving school",
  "Certified instructor, Rajesh Chauhan",
  "Dual-control car for safe learning",
  "Flexible morning and evening slots",
];

// ---------------------------------------------------------------------------

export default function DrivingSchool() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight">
            Vidhata <span className="text-red-500">Driving School</span>
          </span>
          <div className="hidden items-center gap-8 text-base text-neutral-700 sm:flex">
            <a href="#courses" className="hover:text-neutral-950">Course</a>
            <a href="#steps" className="hover:text-neutral-950">How it works</a>
            <a href="#contact" className="hover:text-neutral-950">Contact</a>
            <a
              href="tel:+919898748020"
              className="rounded-md bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-500"
            >
              Call now
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="text-neutral-700 sm:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
        {menuOpen && (
          <div className="flex flex-col gap-1 border-t border-neutral-200 px-6 py-4 text-base text-neutral-700 sm:hidden">
            <a href="#courses" onClick={() => setMenuOpen(false)} className="rounded-md px-2 py-2 hover:bg-neutral-100">Course</a>
            <a href="#steps" onClick={() => setMenuOpen(false)} className="rounded-md px-2 py-2 hover:bg-neutral-100">How it works</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="rounded-md px-2 py-2 hover:bg-neutral-100">Contact</a>
            <a href="tel:+919898748020" className="mt-2 rounded-md bg-red-600 px-4 py-2 text-center font-medium text-white">Call now</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 sm:py-24 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm text-neutral-700">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Now taking new students · RTO-recognized · Porbandar
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-tight sm:text-6xl">
            Learn to drive,<br />the right way.
          </h1>
          <p className="mt-4 max-w-md text-neutral-700">
            Vidhata Motor Driving School is an RTO-recognized school that
            trains new drivers on real roads with a dual-control car, patient
            instruction, and RTO test prep — taught by Rajesh Chauhan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+919898748020"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-red-500"
            >
              <Phone className="h-4 w-4" />
              9898748020
            </a>
            <a
              href="https://wa.me/919898748020"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-5 py-3 text-base font-semibold text-neutral-800 transition hover:bg-neutral-100"
            >
              WhatsApp us
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-neutral-200"
        >
          <Image
            src="/car-front.jpg"
            alt="Vidhata Driving School training car"
            width={1040}
            height={780}
            className="h-full w-full object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {WHY.map((item) => (
            <motion.div
              key={item}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600/15 text-red-500">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-base text-neutral-700">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Course */}
      <section id="courses" className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/15 text-red-500">
            <Car className="h-5 w-5" />
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">Four-wheeler course</h2>
        </div>
        <p className="mt-3 max-w-xl text-base text-neutral-700">
          RTO-recognized car training: 15 days, 10 km of driving every day, in a
          dual-control hatchback.
        </p>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-8 grid gap-4 sm:grid-cols-2"
        >
          {INCLUDED.map((item) => (
            <motion.div
              key={item}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600/15 text-red-500">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-base text-neutral-700">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Steps */}
      <section id="steps" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold sm:text-4xl">From first lesson to licensed</h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map((step) => (
            <motion.div
              key={step.n}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            >
              <span className="font-mono text-base text-red-500">{step.n}</span>
              <h3 className="mt-1 font-semibold text-neutral-900">{step.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-700">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Instructor + car */}
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-neutral-200"
        >
          <Image
            src="/car-back.jpg"
            alt="Vidhata Driving School car with L-plates"
            width={900}
            height={1000}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Trained by Rajesh Chauhan</h2>
          <p className="mt-3 text-neutral-700">
            Every lesson is one-on-one, on a Maruti Suzuki WagonR fitted with
            L-plates and dual controls — so you&apos;re never learning alone, and
            never at risk.
          </p>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-neutral-200 bg-neutral-50 p-10 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to start driving?</h2>
          <p className="mx-auto mt-3 max-w-md text-base text-neutral-700">
            Call or WhatsApp Rajesh Chauhan to book your first lesson.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919898748020"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-red-500"
            >
              <Phone className="h-4 w-4" />
              9898748020
            </a>
            <span className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-5 py-3 text-base text-neutral-700">
              <MapPin className="h-4 w-4" />
              Porbandar, Gujarat
            </span>
          </div>
        </motion.div>
        <p className="mt-10 text-center text-sm text-neutral-600">
          Vidhata Motor Driving School — Porbandar.
        </p>
      </section>
    </main>
  );
}