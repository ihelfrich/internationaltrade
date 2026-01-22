import * as THREE from "https://unpkg.com/three@0.161.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.161.0/examples/jsm/controls/OrbitControls.js";

function createSurface(container, config) {
  const width = container.clientWidth || 800;
  const height = container.clientHeight || 420;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf7f3ec);

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(8, 6, 10);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.innerHTML = "";
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;

  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(6, 10, 8);
  scene.add(dirLight);

  const gridSize = 60;
  const geometry = new THREE.PlaneGeometry(10, 10, gridSize, gridSize);
  geometry.rotateX(-Math.PI / 2);

  const colors = [];
  const color = new THREE.Color();

  const material = new THREE.MeshStandardMaterial({
    side: THREE.DoubleSide,
    vertexColors: true,
    metalness: 0.1,
    roughness: 0.7
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const axes = new THREE.AxesHelper(6);
  axes.material.opacity = 0.3;
  axes.material.transparent = true;
  scene.add(axes);

  function computeHeight(logGdpI, logGdpJ, logDistance, params) {
    const { a, b, c } = params;
    const lnTrade = a * logGdpI + b * logGdpJ - c * logDistance;
    return lnTrade;
  }

  function updateSurface(params) {
    const positions = geometry.attributes.position;
    colors.length = 0;

    const minGdp = params.gdpMin;
    const maxGdp = params.gdpMax;
    const minD = params.distMin;
    const maxD = params.distMax;

    let minH = Infinity;
    let maxH = -Infinity;

    for (let i = 0; i < positions.count; i += 1) {
      const x = positions.getX(i);
      const z = positions.getZ(i);

      const tX = (x + 5) / 10;
      const tZ = (z + 5) / 10;

      const gdpI = minGdp + (maxGdp - minGdp) * tX;
      const gdpJ = minGdp + (maxGdp - minGdp) * tZ;
      const dist = minD + (maxD - minD) * tZ;

      const logGdpI = Math.log(gdpI);
      const logGdpJ = Math.log(gdpJ);
      const logDist = Math.log(dist);

      const h = computeHeight(logGdpI, logGdpJ, logDist, params);
      positions.setY(i, h * 0.6);

      minH = Math.min(minH, h);
      maxH = Math.max(maxH, h);
    }

    for (let i = 0; i < positions.count; i += 1) {
      const h = positions.getY(i) / 0.6;
      const t = (h - minH) / (maxH - minH || 1);
      color.setHSL(0.6 - 0.5 * t, 0.6, 0.5 + 0.15 * t);
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    positions.needsUpdate = true;
  }

  updateSurface(config);

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  function resize() {
    const newWidth = container.clientWidth || width;
    const newHeight = container.clientHeight || height;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  }

  window.addEventListener('resize', resize);

  return {
    update(params) {
      updateSurface(params);
    },
    dispose() {
      window.removeEventListener('resize', resize);
      controls.dispose();
      renderer.dispose();
      geometry.dispose();
    }
  };
}

window.GravityWebGL = {
  init(containerId, params) {
    const container = document.getElementById(containerId);
    if (!container) return null;
    return createSurface(container, params);
  }
};
