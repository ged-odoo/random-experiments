import { Component, useState } from "@odoo/owl";
import { Dialog } from "@web/core/dialog/dialog";
import { BomCalculator } from "./bom_calculator/bom_calculator";
import { CalculatorModel } from "./bom_calculator/calculator_model";

export class BomCalculatorDialog extends Component {
    static template = "roof_poc.BomCalculatorDialog";
    static components = {
        Dialog,
        BomCalculator,
    };
    static props = ["data", "onConfirm", "close"];

    setup() {
        // note: need to be careful if we change data serializing structure.
        // would probably make sense to have some kind of versioning system
        const rawData = this.props.data ? JSON.parse(this.props.data) : false;
        this.model = useState(new CalculatorModel(rawData));
    }

    confirm() {
        const jsonString = JSON.stringify(this.model.data);
        this.props.onConfirm(jsonString);
        this.props.close();
    }
}
