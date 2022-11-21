const data = [
  {
    question: "Which of these elements in HTML can be used for making a text bold?",
    incorrectAnswers: [
      "<a>",
      "<br>",
      "<pre>",
    ],
    correctAnswer: "<b>",
  },

  {
    question:
      "Which tag do we use in HTML for inserting a line-break?",
    incorrectAnswers: [
      "<a>",
      "<pre>",
      "<b>",
    ],
    correctAnswer: "<br>",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    incorrectAnswers: ["<script>", "<headStyle>", "<css>"],
    correctAnswer: "<style>",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    incorrectAnswers: ["class", "font", "styles"],
    correctAnswer: "style",
  },
  {
    question: "How to create a hyperlink in HTML?",
    incorrectAnswers: [
      "<a url = “www.thinkandlearn.com” thinkandlearn.com /a>",
      "<a> www.thinkandlearn.com <thinkandlearn.com /a>",
      "<a link = “www.thinkandlearn.com”> thinkandlearn.com </a>",
    ],
    correctAnswer: "<a href = “www.thinkandlearn.com”> thinkandlearn.com </a>",
  },
  {
    question: "How do you insert a comment in an HTML file?",
    incorrectAnswers: [
      "' this is a comment",
      "// this is a comment",
      "// this is a comment //",
    ],
    correctAnswer: "/* this is a comment */",
  },
  {
    question: "In HTML, how do we insert an image?",
    incorrectAnswers: ["<img url = “jtp.png” />", "<img link = “jtp.png” />", "<img href = “jtp.png” />"],
    correctAnswer: "<img src = “jtp.png” />",
  },
  {
    question: "Which tag is used in HTML5 for the initialization of the document type",
    incorrectAnswers: [
      "<Doctype HTML>",
      "<\Doctype html>",
      "<Doctype>",
    ],
    correctAnswer: "<!DOCTYPE html>",
  },
];

export default data;
