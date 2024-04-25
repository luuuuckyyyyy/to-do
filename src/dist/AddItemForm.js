"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./AddItemForm.module.css");
const react_bootstrap_1 = require("react-bootstrap");
function AddItemForm(props) {
    let [error, SetError] = react_1.useState(false);
    const [NewTaskTitle, SetState] = react_1.useState("");
    const AddTask = () => {
        if (NewTaskTitle.trim() !== "") {
            props.AddNewItem(NewTaskTitle.trim());
            SetState("");
        }
        else
            SetError("Field is requied");
        return;
    };
    const OnChangeTaskTitleHandler = (e) => { SetState(e.currentTarget.value); };
    const onKeyDownTaskTitleHandler = (e) => {
        SetError(false);
        if (e.key === "Enter") {
            {
                props.AddNewItem(NewTaskTitle);
                SetState("");
            }
        }
    };
    return react_1.default.createElement(react_bootstrap_1.Container, { className: "AddItemForm my-5 d-flex p-2 justify-content-center " },
        react_1.default.createElement(react_bootstrap_1.Row, { className: 'w-100' },
            react_1.default.createElement(react_bootstrap_1.Col, { md: "10" },
                react_1.default.createElement("input", { placeholder: "enter your task here", value: NewTaskTitle, onChange: OnChangeTaskTitleHandler, onKeyDown: onKeyDownTaskTitleHandler, className: error ? "error" : "", style: { width: "100%" } })),
            react_1.default.createElement(react_bootstrap_1.Col, { md: "2" },
                react_1.default.createElement(react_bootstrap_1.Button, { variant: "primary", onClick: AddTask }, "+"),
                error ? react_1.default.createElement("div", { className: 'error-massage' },
                    " ",
                    error,
                    " ") : null)));
}
;
exports.default = AddItemForm;
