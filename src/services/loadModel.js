const tf = require('@tensorflow/tfjs-node');
 
async function loadModel() {
    const model = await tf.loadGraphModel('https://storage.googleapis.com/capstone_mytrash/saved/saved/model.json');
    return model
}
 
module.exports = loadModel;