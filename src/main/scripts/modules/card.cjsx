`import Component from './core/component'`

class Card extends Component

  @className: 'card-component'

  @contextTypes: Component.contextTypes
  @defaultProps: Component.defaultProps
  @propTypes: Component.withPropTypes
    title: React.PropTypes.string.isRequired
    artwork: React.PropTypes.string.isRequired
    artist: React.PropTypes.string
    type: React.PropTypes.string
    subtype: React.PropTypes.string
    cost: React.PropTypes.object
    rarity: React.PropTypes.string
    quote: React.PropTypes.string
    author: React.PropTypes.string

  render: ->
    <div className='card'>
      <header>
        <h1>{@props.title}</h1>
        <aside>{@props.cost}</aside>
      </header>
      <img src={@props.artwork}/>
      <section className="taxonomy">
        <h2>{@props.type} – {@props.subtype}</h2>
        <aside>{@props.rarity}</aside>
      </section>
      <section className="oracle">
        <footer>
          <blockquote>
            {@props.quote}
          </blockquote>
          <author>{@props.author}</author>
        </footer>
      </section>
      <footer>{@props.artist}</footer>
    </div>

`export default Card`
