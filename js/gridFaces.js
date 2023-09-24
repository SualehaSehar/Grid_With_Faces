export class GridF {
  constructor(gw, gd, Dx, Dz, color1, sc) {
    this.gwidth = gw;
    this.gdepth = gd;
    this.Dwx = Dx;
    this.Dwz = Dz;
    this.color = new THREE.Color(color1);
    this.scene = sc;
    this.geometry = new THREE.BufferGeometry();
  }

  drawGrid() {
    var vertices = [];

    for (var z = 0; z < this.Dwz + 1; z++) {
      for (var x = 0; x < this.Dwx + 1; x++) {
        var xx = -(this.gwidth / 2) + x * (this.gwidth / this.Dwx);
        var y = 0.0;
        var zz = -(this.gdepth / 2) + z * (this.gdepth / this.Dwz);
        vertices.push(xx, y, zz);
      }
    }

    const vertice = new Float32Array(vertices);

    this.geometry.addAttribute(
      "position",
      new THREE.BufferAttribute(vertice, 3)
    );

    this.applyFaces();

    const material = new THREE.MeshBasicMaterial({ color: this.color });
    const grid = new THREE.Mesh(this.geometry, material);

    this.scene.add(grid);
    return grid;
  }

  applyFaces() {
    var indices = [];
    for (var z = 0; z < this.Dwz; z++) {
      for (var x = 0; x < this.Dwx; x++) {
        //triangle 1
        var tx1 = x + z * (this.Dwx + 1);
        var ty1 = x + (z + 1) * (this.Dwx + 1);
        var tz1 = x + 1 + z * (this.Dwx + 1);

        indices.push(tx1, ty1, tz1);

        //T2
        var tx2 = tz1;
        var ty2 = ty1;
        var tz2 = x + 1 + (z + 1) * (this.Dwx + 1);
        indices.push(tx2, ty2, tz2);
      }
    }

    this.geometry.setIndex(indices);
  }
}
