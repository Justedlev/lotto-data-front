import React from "react";

export default function MyTable({ r }) {
    return (
        <table>
            <tr>
                <th>Номер</th>
                <th>Колличество</th>
            </tr>
            {r.sort(function (a, b) {
                    return b.number - a.number;
                })
                .map((rep, i) => (
                    <tr key={i}>
                        <td>{rep.number}</td>
                        <td>{rep.count}</td>
                    </tr>
                ))}
        </table>
    );
}
