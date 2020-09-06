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

const rowPerPageOptions = [
  { id: 10, label: "10 repo per Page" },
  { id: 15, label: "15 repo per Page" },
  { id: 50, label: "50 repo per page" },
];

export const getRowPerPageOptions = () => rowPerPageOptions;
