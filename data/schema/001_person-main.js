/*eslint quote-props: ["error", "always"]*/
/*eslint-env es6*/

const schema = {
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "Ameenuddin Atif Mohammed",
  alternateName: "Atif Mohammed",
  url: "http://atif.work/",
  image: "http://atif.work/static/atif-mohammed.jpg",
  telephone: "+31 644 939 013",
  email: "atif089@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/atif089",
    "https://github.com/atif089",
    "https://atif.work/atif-mohammed-cv.pdf",
  ],
  jobTitle: "Director of Engineering",
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Director of Engineering",
      skills: "Javascript, Golang, Microservices, MySQL, GCP, NodeJS, React, Vue, Docker, PHP, WordPress",
    },
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "Cenomi",
    },
    {
      "@type": "Organization",
      name: "Booking.com",
    },
    {
      "@type": "Organization",
      name: "Amazon.com",
    },
    {
      "@type": "Organization",
      name: "Thinkful.com",
    },
    {
      "@type": "Organization",
      name: "UnitedHealth Group",
    },
  ],
};

module.exports = {
  schema,
  schemaAsString: JSON.stringify(schema, null, 2),
};
