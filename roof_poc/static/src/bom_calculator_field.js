import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { BomCalculatorDialog } from "./bom_calculator_dialog";
import { standardFieldProps } from "@web/views/fields/standard_field_props";

class BomCalculatorField extends Component {
    static template = "roof_poc.BomCalculatorField";
    static props = standardFieldProps;

    setup() {
        this.dialogService = useService("dialog");
    }

    openBomCalculator() {
        const data = this.props.record.data[this.props.name];

        this.dialogService.add(BomCalculatorDialog, {
            data,
            onConfirm: (data) => this.confirm(data),
        });
    }

    confirm(data) {
        this.props.record.update({ [this.props.name]: data });
    }
}

const bomCalculatorField = {
    component: BomCalculatorField,
    additionalClasses: ["d-block"],
};

registry.category("fields").add("roof_bom_calculator", bomCalculatorField);
