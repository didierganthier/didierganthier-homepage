import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function loadGLTFModel(
    scene,
    glbPath,
    options = { receiveShadow: true, castShadow: true }
) {
    const { receiveShadow, castShadow } = options;
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene
                obj.name = 'gaming'
                obj.position.y = 0
                obj.receiveShadow = receiveShadow
                obj.castShadow = castShadow
                scene.add(obj)

                obj.traverse(child => {
                    if(child.isMesh) {
                        child.castShadow = castShadow
                        child.receiveShadow = receiveShadow
                    }
                })
                resolve(obj)
            },
            undefined,
            function (error) {
                reject(error)
            }
        )
    });
}