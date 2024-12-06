export enum CollectionColors {
  sunset = "bg-gradient-to-r from-red-500 to-orange-500",
  snowflake = "bg-gradient-to-r from-indigo-400 to-cyan-400",
  firtree = "bg-gradient-to-r from-emerald-500 to-emerald-900",
  rosebud = "bg-gradient-to-r from-pink-500 to-purple-500",
  retro = "bg-gradient-to-r from-red-500 to-yellow-500 via-blue-500",
  metal = "bg-gradient-to-r from-slate-500 to-slate-800",
  water = "bg-gradient-to-r from-cyan-500 to-blue-500",
  twilight = "bg-gradient-to-r from-purple-500 to-pink-500",
  candy = "bg-gradient-to-r from-yellow-400 via-pink-508 to-red-500",
  powder = "bg-gradient-to-r from-violet-200 to-pink-200",
  aurora = "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500",
  oceanic = "bg-gradient-to-b from-cyan-500 to-blue-900",
  rust = "bg-gradient-to-r from-amber-900 to-orange-600",
  cyberpunk = "bg-gradient-to-r from-purple-800 via-blue-900 to-indigo-900",
}

export type CollectionColor = keyof typeof CollectionColors;
