import React from "react";

const HtmlTags = () => {
  return (
    <div>
      <h1>HTML5 tags</h1>
      <header>This are part of under semantic elements</header>
      <nav>Navbar</nav>
      <section>this is section tag</section>
      <article>this is article tag</article>
      <footer>footer tag</footer>
      <a href="/src/HtmlTags.js">this is anchor tag</a>
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          temporibus illo <br />
          this is break tag perspiciatis provident id harum itaque magnam, nam,
          velit sed nostrum! Recusandae reprehenderit aliquam molestiae?
          Perferendis vero aut incidunt quaerat.
        </p>
      </section>
      <p>paragraph tag</p>
      <small>small font tag</small>
      <br />
      <em>em tag</em>
      <br />
      <i>i tag</i>
      <br />
      <sup>sup tag</sup>
      <strong>strong font tag</strong>
      <sub>sub tag</sub>
      <div>Div tag is block element occupies entire width of screen</div>
      <span>span is inline element occupies only content of the element</span>
    </div>
  );
};

export default HtmlTags;
