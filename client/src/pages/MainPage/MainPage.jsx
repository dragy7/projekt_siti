

export default function MainPage() {
  return (
    <>
    {/* 
      <h1>Main Page</h1>
      <Link to={"/createcar"}>
        <p>Create car form</p>
      </Link>
      <Link to={"/cars"}>
        <p>View cars</p>
      </Link>
  */}
      <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Cover - Free Bulma template</title>
  <link rel="shortcut icon" href="../images/fav_icon.png" type="image/x-icon" />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans"
    rel="stylesheet"
  />
  {/* Bulma Version 1*/}
  <link
    rel="stylesheet"
    href="https://unpkg.com/bulma@1.0.0/css/bulma.min.css"
  />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n        html,\n        body {\n            font-family: 'Open Sans';\n        }\n\n        img {\n            padding: 5px;\n            border: 1px solid #ccc;\n        }\n    "
    }}
  />
  <section className="hero is-fullheight is-default is-bold">
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="../">
              <img src="../images/bulma.png" alt="Logo" />
            </a>
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <div className="tabs is-right">
                <ul>
                  <li className="is-active">
                    <a>Domov</a>
                  </li>
                  <li>
                    <a href="">Prodej</a>
                  </li>
                  <li>
                    <a href="">Penalty</a>
                  </li>
                  <li>
                    <a href="">Střela</a>
                  </li>
                  <li>
                    <a href="">Košík</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns is-vcentered">
          <div className="column is-5">
            <figure className="image is-4by3">
              <img
                src="https://1gr.cz/fotky/lidovky/14/062/c460/PAJ53cb89_Brazuca.jpg"
                alt="Description"
              />
            </figure>
          </div>
          <div className="column is-6 is-offset-1">
            <h1 className="title is-2">Vítejte na stránce pro prodej fotbalových věcí</h1>
            <h2 className="subtitle is-4">
              Dále na této stránce najdete tutoriály které budu muset potřebovat pro fotbal
            </h2>
            <br />
            <p className="has-text-centered">
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-foot">
      <div className="container">
        <div className="tabs is-centered">
          <ul>
            <li>
              <a>And this is the bottom</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</>
    </>
  );
}
