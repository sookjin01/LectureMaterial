import React from 'react';
import './App.css';

function App({ ...props }) {
  return (
    <div>
      <div w3-include-header="header.html">
        <header data-role="header">
          <h1>Header.html</h1>
        </header>
      </div>
      <section id="page1" data-role="page">
        <div class="content" data-role="content">
          컨텐츠
        </div>
      </section>
      <div w3-include-footer="footer.html">
        <footer data-role="footer">
          <h1>Footer.html</h1>
        </footer>
      </div>
    </div>
  );
}

export default React.memo(App);
