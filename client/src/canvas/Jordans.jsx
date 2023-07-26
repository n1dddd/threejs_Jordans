/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 jordan.glb 
Author: Joe-Wall (https://sketchfab.com/joewall)
License: SKETCHFAB Editorial (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/air-jordan-1-variety-pack-feabb5d8f896497d8def5076ebe220bb
Title: Air Jordan 1 Variety Pack
*/

// import { useGLTF, Stage, PresentationControls } from '@react-three/drei'
// import { useRef } from "react";

// const Jordan = (props) => {
//   const group = useRef();
//   const { nodes, materials } = useGLTF('/jordan.glb')
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group ref={group} rotation={[-Math.PI / 2, 0, 0]}>
//         <mesh geometry={nodes.Object_2.geometry} material={materials.Jordan1_LowPoly_BnW} dispose={null}/>
//         <mesh geometry={nodes.Object_3.geometry} material={materials.Jordan1_LowPoly_Chicagp} />
//         <mesh geometry={nodes.Object_4.geometry} material={materials.Jordan1_LowPoly_Obsidian} />
//         <mesh geometry={nodes.Object_5.geometry} material={materials.Jordan1_LowPoly_SBB} />
//         <mesh geometry={nodes.Object_6.geometry} material={materials.Jordan1_LowPoly_UniBLue} />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/jordan.glb')

// export default Jordan
import { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import JordanItem from './JordanItem.jsx';


import state from "../store/index.js"


const Jordan = (props) => {
  const { nodes, materials } = useGLTF('/jordan.glb')
  const [stage, setStage] = useState(true);


  const [shoes, setShoes] = useState([
    {
      name: "jordan1BnW",
      geometry: nodes.Object_2.geometry,
      material: materials.Jordan1_LowPoly_BnW
    },
    {
      name: "jordan1Chg",
      geometry: nodes.Object_3.geometry,
      material: materials.Jordan1_LowPoly_Chicagp
    },
    {
      name: "jordan1Obs",
      geometry: nodes.Object_4.geometry,
      material: materials.Jordan1_LowPoly_Obsidian
    },
    {
      name: "jordan1Sbb",
      geometry: nodes.Object_5.geometry,
      material: materials.Jordan1_LowPoly_SBB
    },
    {
      name: "jordan1Uni",
      geometry: nodes.Object_6.geometry,
      material: materials.Jordan1_LowPoly_UniBLue
    },
  ])
  let shoeComponentArray = shoes.map((shoeObject) => {
    return (
      <mesh onClick={() => handleFilter(shoeObject.name)} key={shoeObject.name} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0.02, 0]} polar={[0, 0, Math.PI / 4]} geometry={shoeObject.geometry} material={shoeObject.material} />
    )
  })
  const [shoeComponent, setShoeComponent] = useState(shoeComponentArray)


  const handleFilter = (value) => {
    const individualShoe = shoes.findIndex(object => object.name === value)
    setShoeComponent(shoeComponent[individualShoe])
  }




  return (
    <group>
      <JordanItem
        elementOfShoe={handleFilter}
        shoeArray={shoes}
        shoeComponent={shoeComponent}
      />
    </group>

  )
}

useGLTF.preload('/jordan.glb')

export default Jordan