`import Main from 'sea-siege/main'`

ReactRouter.run (<ReactRouter.Route handler={Main} path='/'>
</ReactRouter.Route>), (Handler) -> React.render <Handler/>, document.getElementById('reactive')
