import React, {Fragment} from 'react'

class Billtrim extends React.Component {
    render() {
        return (
            <Fragment>
            <header className="header">
                <img src="https://www.billtrim.com/images/" alt="bt" />
            </header>
              <form>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="password"/>
                <button type="submit">log in</button>
              </form>

            </Fragment>
        )

    }
}

export default Billtrim