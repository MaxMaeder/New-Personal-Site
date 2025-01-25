import showdown from "showdown";
import showdownHighlight from "showdown-highlight";

const mdConverter = new showdown.Converter({
  extensions: [showdownHighlight],
  tables: true,
});
mdConverter.setFlavor("github");

export { mdConverter };
