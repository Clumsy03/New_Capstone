const tf = require('@tensorflow/tfjs-node');
const InputError = require('../exceptions/InputError');

async function predictClassification(model, image) {
    try {
        const tensor = tf.node
            .decodeJpeg(image)
            .resizeNearestNeighbor([224, 224])
            .expandDims()
            .toFloat();

        const prediction = model.predict(tensor);
        const score = await prediction.data();
        const confidenceScore = Math.max(...score);
        

        const classes = [
            'battery',
             'biological',
             'brown-glass',
             'cardboard',
             'clothes',
             'green-glass',
             'metal',
             'paper',
             'plastic',
             'shoes',
             'trash',
             'white-glass'
        ];
        
        const classResult = tf.argMax(prediction, 1).dataSync()[0];
        
        const label = classes[classResult];

        const organik = ['biological'];
        const anorganik = [
            'cardboard',
            'clothes',
            'metal',
            'paper',
            'plastic',
            'shoes',
            'green-glass',
            'white-glass'
        ];
        const berbahaya = ['battery','brown-glass','trash'];
        
        let result;
        let suggestion;


        if(organik.includes(label)){
            result = 'Organik';
            suggestion = 'Buanglah pada sampah Hijau';
        }
        else if(anorganik.includes(label)){
            result = 'Anorganik';
            suggestion = 'Buanglah pada sampah Kuning';
        }
        else if(berbahaya.includes(label)){
            result = 'Sampah Berbahaya';
            suggestion = 'Buanglah pada sampah Merah';
        }
            
        
        return { result, suggestion, confidenceScore };
    } catch (error) {
        throw new InputError(`Terjadi kesalahan: ${error.message}`);
    }
}

module.exports = predictClassification;