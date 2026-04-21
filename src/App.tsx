import './App.css'

function App() {
  return (
    <>
      <h1>Husky</h1>
      <h2>Get started</h2>
      <ul>
        <li>
          <code>npm install --save-dev husky</code> installs husky as a
          development dependency
        </li>
        <li>
          <code>npx husky init</code> automatically initializes husky and
          creates the <code>.husky</code> folder
        </li>
      </ul>

      <h2>Main Husky hooks</h2>
      <ul>
        <li>
          <code>pre-commit</code> – run checks (like lint, tests, or formatters)
          before a commit is created
        </li>
        <li>
          <code>pre-push</code> – run checks before code is pushed to the remote
        </li>
        <li>
          <code>commit-msg</code> – validate the commit message (for example to
          enforce a convention)
        </li>
      </ul>
    </>
  )
}

export default App
