export class CalculatorModel {
    constructor(data) {
        this.data = data || {
            roofs: [{
                id: 1,
                name: "New Roof",
                x: 100,
                y: 50,
                width: 400,
                height:200,
                color: "#ac5b3e"
            }],
        };
        // todo: handle case with no roof
        this.currentRoof = this.data.roofs[0];
    }

    addRoof() {
        const ids = new Set(this.data.roofs.map((r) => r.id));
        let id = 1;
        while (ids.has(id)) {
            id++;
        }
        this.data.roofs.push({
            id,
            name: "New Roof",
        });
        this.currentRoof = this.data.roofs.at(-1);
    }

    selectRoof(id) {
        const roof = this.data.roofs.find((r) => r.id === id);
        this.currentRoof = roof;
    }

    deleteRoof() {
        const index = this.data.roofs.findIndex(
            (r) => r.id === this.currentRoof.id,
        );
        this.data.roofs.splice(index, 1);
        this.currentRoof = this.data.roofs[0];
    }

}
