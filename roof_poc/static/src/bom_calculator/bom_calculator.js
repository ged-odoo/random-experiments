import { Component, onMounted, onPatched, useRef, useState } from "@odoo/owl";
import { Dropdown } from "@web/core/dropdown/dropdown";
import { DropdownItem } from "@web/core/dropdown/dropdown_item";
import { useService } from "@web/core/utils/hooks";

export class BomCalculator extends Component {
    static template = "roof_poc.BomCalculator";
    static props = ["model"];
    static components = { Dropdown, DropdownItem };

    setup() {
        this.model = this.props.model;
        this.notificationService = useService("notification");
        this.state = useState({ activeTool: false });
        this.canvasRef = useRef("canvas");
        this.ctx = null;
        onMounted(() => {
            this.ctx = this.canvasRef.el.getContext("2d");
            this.draw()
        });
        onPatched(() => this.draw())
    }

    createOrderLines() {
        this.notificationService.add("Todo: create order lines");
    }

    postImage() {
        this.notificationService.add("Todo: post image");
    }

    selectTool(tool) {
        this.state.activeTool = tool;
    }

    draw() {
        // simple for now, but will likely grow over time
        // this code should probably move in another file
        // something like roof_renderer. it could be maybe a function
        // function renderRoof(canvas, ctx, data) { ... }
        // erasing current content
        const ctx = this.ctx;
        const canvas = this.canvasRef.el;
        const roof = this.model.currentRoof;
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        // drawing roof
        ctx.fillStyle = roof.color;
        ctx.fillRect(roof.x, roof.y, roof.width, roof.height);
    }

    onCanvasClick() {
        // todo
        // need to find which element has been clicked, which tool is active
        // and act accordingly
    }
}
