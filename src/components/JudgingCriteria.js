import React, { Component } from "react";

export default class JudgingCriteria extends Component {
    constructor(props) {
        super(props)
        this.state = {
            criteria: [
                { category: 'Usefulness', desc: "fits our profile", points: 35 },
                { category: 'Creativity', desc: "out of the box", points: 25 },
                { category: 'Technical Complexity', desc: "complex calculation, computing", points: 20 },
                { category: 'Results', desc:"progress made during the hackathon", points: 15 },
                { category: 'Presentation', desc: "clear process description/demo", points: 5 }
            ]
        }
    }
    renderTableData() {
        return this.state.criteria.map((criterion, index) => {
            const { category, desc, points } = criterion //destructuring
            return (
                <tr key={category}  >
                    <td className="message is-primary">{category}</td>
                    <td className="message is-dark">{desc}</td>
                    <td className="message is-primary">{points}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <section class="section">
                <div className="container">
                    <h3 className="title is-3">Judging Criteria</h3>
                    <div className="content">
                        <table id='criteria' >
                            <tbody>
                            {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        );
    }

}

