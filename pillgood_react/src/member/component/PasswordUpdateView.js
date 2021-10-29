import React, { Component } from "react";

class PasswordUpdateView extends Component {
    render() {
        // const {} = this.props;

        return (
            <div>
                <dl>
                    <dt>신규 비밀번호</dt>
                    <dd>
                        <input
                            type="password"
                            name="newPassword"
                            onChange={(e) =>
                                passwordEquivCheck(
                                    e.target.name,
                                    e.target.value
                                )
                            }
                        />
                    </dd>
                </dl>
                <dl>
                    <dt>비밀번호 확인</dt>
                    <dd>
                        <input
                            type="password"
                            name="checkPassword"
                            onChange={(e) =>
                                passwordEquivCheck(
                                    e.target.name,
                                    e.target.value
                                )
                            }
                        />
                    </dd>
                </dl>
                <div>
                    <span id="checkTrue" className="blue-color hidden">
                        비밀번호가 일치합니다.
                    </span>
                    <span id="checkFalse" className="red-color hidden">
                        비밀번호가 일치하지 않습니다.
                    </span>
                </div>

                <input type="button" value="변경" disabled={true} />
            </div>
        );
    }
}

let newPassword = "";
let checkPassword = "";

const passwordEquivCheck = (name, value) => {
    const checkTrue = document.querySelector("#checkTrue");
    const checkFalse = document.querySelector("#checkFalse");
    const button = document.querySelector("input[type=button]");

    if (name === "newPassword") {
        newPassword = value;
    } else if (name === "checkPassword") {
        checkPassword = value;
    }

    if (newPassword === "" || checkPassword === "") {
        checkTrue.classList.add("hidden");
        checkFalse.classList.add("hidden");
        button.disabled = true;
    } else if (newPassword === checkPassword) {
        checkTrue.classList.remove("hidden");
        checkFalse.classList.add("hidden");
        button.disabled = false;
    } else {
        checkTrue.classList.add("hidden");
        checkFalse.classList.remove("hidden");
        button.disabled = true;
    }
};

export default PasswordUpdateView;
