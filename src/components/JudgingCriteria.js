import React, { Component } from "react";

const criteria = [
    { category: 'Usefulness', desc: "how does it fit the theme of Big Data/how COVID-19 is affecting", points: "35" },
    { category: 'Creativity', desc: "out of the box", points: "25" },
    { category: 'Technical Complexity', desc: "complex calculation, computing", points: "20" },
    { category: 'Overall Quality', desc: "progress made during the hackathon", points: "15" },
    { category: 'Presentation', desc: "clear process description/demo", points: "5" }
]

const header = ["Category", "Description", "Points"]

const footer = ["", "", "100"]

export default class JudgingCriteria extends Component {
    renderHeader() {
        return (
            <tr key="header" class="is-selected">
                {header.map(headerItem => {
                    return (
                        <th>{headerItem}</th>
                    )
                })}
            </tr>
        )
    }

    renderFooter() {
        return (
            <tr key="footer">
                {footer.map(footerItem => {
                    return (
                        <th>{footerItem}</th>
                    )
                })}
            </tr>
        )
    }

    renderTableData() {
        return (criteria.map(criterion => {
            const { category, desc, points } = criterion //destructuring
            return (
                <tr key={category}>
                    <td>{category}</td>
                    <td>{desc}</td>
                    <td>{points}</td>
                </tr>
            )
        }))
    }

    render() {
        return (
            <section class="section">
                <div class="container">
                    <h3 class="title is-3">Judging Criteria</h3>
                    <div class="content">
                        <table id="criteria" className="table is-striped customBoxShadow">
                            <thead>
                                {this.renderHeader()}
                            </thead>
                            <tfoot>
                                {this.renderFooter()}
                            </tfoot>
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
