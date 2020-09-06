const sortOptions = [
  { id: "match ", label: "Best match" },
  { id: "stars desc", label: "Most Stars" },
  { id: "stars asc", label: "Fewest Stars" },
  { id: "fork desc", label: "Most Fork" },
  { id: "fork asc", label: "Fewest Fork" },
  { id: "updated desc", label: "Recently updated " },
  { id: "updated asc", label: "Least recently updated" },
];

export const getSortOptions = () => sortOptions;
