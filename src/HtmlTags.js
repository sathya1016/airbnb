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

      <section>
        {/* unordered list */}
        <ul type="square">
          total three types sqaure,disc,circle
          <li>Orange</li>
          <li>Apple</li>
        </ul>
        <ul></ul>
        {/* ordered list */}
        <ol type="i">
          total four types numbers,roman number, small and capital alphabets
          <li>One</li>
          <li>Two</li>
        </ol>
        {/* description list  */}
        <dl>
          <dt>Hello</dt>
          <dd>sdheferiufheriufhuiehgeriufheiuarfhuierh</dd>
        </dl>
      </section>
      <h3>
        <a href="/src/App.js">
          anchor tag with link
          <img src="/src/Sathyanarayana Passport photo.jpeg" />
        </a>
      </h3>

      <div>
        <table>
          <th>
            Table head
            <tr>
              <td>data1</td>
              <td>data4</td>
            </tr>
            <tr>
              <td>data1</td>
              <td>data5</td>
            </tr>
            <tr>
              <td>data1</td>
              <td>data6</td>
            </tr>
          </th>
        </table>
      </div>
      <form>
        <input type="checkbox" id="bike" name="bike" value="bike" />
        <label for="bike">I have bike </label>
        <select name="cars" id="cars">
          <option value="ferrari">Option1</option>{" "}
          <option value="BWM">Option2</option>
          <option value="TATA">Option3</option>
        </select>
      </form>
    </div>
  );
};

export default HtmlTags;
