const timeFormatter = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

//   const formattedDate = timeFormatter.format(new Date(post.publishedAt));

const getFormattedDate = (date: string) => timeFormatter.format(new Date(date))

export { getFormattedDate };
