import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";
import fs from "fs/promises";
import path from "path";

export const parseHeading = async (filePath: string) => {
  console.log(filePath);
  const mdxPath = path.join(process.cwd(), "app", filePath);
  const content = await fs.readFile(mdxPath, "utf-8");

  // Unified processing with plugins for MDX and additional syntax
  const tree = await unified()
    .use(remarkParse) // Parse Markdown
    .parse(content); // Parse to AST
  // console.log(tree);

  const headings: { depth?: number; value?: string }[] = [];

  // Traverse the tree to extract H2 headings
  visit(tree, "heading", (node: any) => {
    console.log(node);
    if (node.depth === 2 || node.depth === 3) {
      const text = node.children
        .map((child: any) => {
          // Handle different node types gracefully
          if (child.type === "text") {
            return child.value;
          } else if (child.value) {
            return child.value; // For other node types like `mdxTextExpression`
          }
          return ""; // Ignore other node types
        })
        .join("")
        .trim(); // Combine and clean the result

      headings.push({
        depth: node.depth,
        value: text,
      });
    }
  });
  return headings;
};
