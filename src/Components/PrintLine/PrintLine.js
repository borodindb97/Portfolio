import React, { Component } from 'react'

import './styles/PrintLine.css'

export default class PrintLine extends Component{
    constructor(props){
        super(props);
        this.state = {
            timer: '',
            cursorIsAlive: true,
            cursorString: '|',
            lineIsFull: false,
            isPrinted: false,
            stringNumber: 0,
            charNumber: 0,
            startString: 'Working with technologies such as ',
            endOfStringNow: '',
            endOfString: [
                'React',
                'Javascript',
                'HTML and CSS',
                'Webpack',
                'Gulp',
                'GIT',
                'Jasmine',
                'Mocha',
                'Npm',
                'Bower'
            ]
        };
        this.checkState.bind(this)
    }


    changeCursor(){
        if (this.state.cursorIsAlive){
            this.setState({
                cursorIsAlive: !this.state.cursorIsAlive,
                cursorString: ''
        })
        } else {
            this.setState({
                cursorIsAlive: !this.state.cursorIsAlive,
                cursorString: '|'
            })
        }
    }

    startAddChars(){
        this.setState({
            timer: setInterval(this.addChar.bind(this), 150)
        })
    }

    addChar(){
        const component = this.state;

        if (component.charNumber === component.endOfString[component.stringNumber].length) {
            clearInterval(component.timer);
            this.setState({
                isPrinted: false,
                lineIsFull: true,
                charNumber: --component.charNumber,
                timer: ''
            });
            this.checkState()
        } else{
            this.setState({
                isPrinted: true,
                endOfStringNow: component.endOfStringNow + `${component.endOfString[component.stringNumber][component.charNumber]}`,
                charNumber: ++component.charNumber
            })
        }

    }

    startDeleteChars(){
        this.setState({
            timer: setInterval(this.deleteChar.bind(this), 150)
        })
    }

    deleteChar(){
        const component = this.state;
        if (component.charNumber === 0){
            clearInterval(component.timer);
            this.setState({
                isPrinted: false,
                lineIsFull: false,
                endOfStringNow: '',
                stringNumber: ++component.stringNumber,
                timer: ''
            });
            this.checkState()
        } else {
            this.setState({
                isPrinted: true,
                endOfStringNow: component.endOfStringNow.slice(0, component.charNumber),
                charNumber: --component.charNumber
            })
        }

    }

    checkState(){
        if (this.state.stringNumber === this.state.endOfString.length ){
            this.setState({
                stringNumber: 0
            })
        }

        if (!this.state.isPrinted){
            if (this.state.lineIsFull) {
                setTimeout(this.startDeleteChars.bind(this), 2000)
            } else {
                setTimeout(this.startAddChars.bind(this), 2000)
            }
        }
    }

    render(){
        return(
            <p className="printLine">
                {this.state.startString}
                <span className="printLine__end">
                    {this.state.endOfStringNow}
                </span>
                <span className="printLine__cursor">
                    {this.state.cursorString}
                </span>
            </p>
        )
    }

    componentDidMount(){
        setInterval(this.changeCursor.bind(this), 500);
        this.checkState()
    }
}