import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default (req, res) => {
  const files = fs.readdirSync(path.join(process.cwd(), "mdx"));

  const data = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join(process.cwd(), "mdx", filename))
      .toString();

    const parsedMarkdown = matter(markdownWithMetadata);
    // console.log(parsedMarkdown.data);

    return {
      date: parsedMarkdown.data.date,
      slug: filename.replace(".mdx", ""),
      title: parsedMarkdown.data.title,
      description: parsedMarkdown.data.description,
      excerpt: parsedMarkdown.data.excerpt || null,
      image: parsedMarkdown.data.image || null,
    };
  });

  data.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    // !!!
    return dateA < dateB ? 1 : dateA > dateB ? -1 : 0;
  });

  res.status(200).json(data || null);
};

// export default (req, res) => {
//   const filepath = path.join(process.cwd(), "/mdx/");
//   let mdxPages = [];

//   let allPages = getFiles(filepath);
//   allPages.map((p) => {
//     if (path.extname(p) === ".mdx") {
//       mdxPages.push(path.basename(p, path.extname(p)));
//     }
//   });
//   // console.log(mdxPages);
//   res.status(200).json(mdxPages);
// };

// function getFiles(dir, files_) {
//   files_ = files_ || [];
//   var files = fs.readdirSync(dir);
//   for (var i in files) {
//     var name = dir + "/" + files[i];
//     if (fs.statSync(name).isDirectory()) {
//       getFiles(name, files_);
//     } else {
//       files_.push(name);
//     }
//   }
//   return files_;
// }
