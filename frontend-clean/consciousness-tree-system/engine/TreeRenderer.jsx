"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function TreeRenderer() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 10, 40);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 20, 10);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    fetch("/data/treeData.json")
      .then((res) => res.json())
      .then((data) => {
        const root = new THREE.Object3D();
        scene.add(root);
        renderNode(data.root, root, 0, 7);
      });

    function renderNode(node, parentObject, depth, maxDepth) {
      const length = 3;
      const thickness = 0.2 * Math.max(1, (maxDepth - depth + 1));
      const geometry = new THREE.CylinderGeometry(thickness, thickness, length, 8);
      const material = new THREE.MeshStandardMaterial({ color: new THREE.Color(`hsl(${depth * 40}, 70%, 60%)`) });
      const branch = new THREE.Mesh(geometry, material);
      branch.position.y = length / 2;
      parentObject.add(branch);

      const pivot = new THREE.Object3D();
      branch.add(pivot);
      pivot.position.y = length / 2;

      if (node.children && node.children.length > 0) {
        const angleSpread = Math.PI / 3;
        const radius = 2.5;

        node.children.forEach((child, i) => {
          const childGroup = new THREE.Object3D();

          const angle = angleSpread * ((i / (node.children.length - 1 || 1)) - 0.5);
          childGroup.rotation.z = angle;
          childGroup.position.y = length;

          pivot.add(childGroup);
          renderNode(child, childGroup, depth + 1, maxDepth);
        });
      }
    }

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      if (mountRef.current && renderer.domElement.parentNode) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh", overflow: "hidden" }} />;
}