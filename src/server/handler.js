const predictClassification = require('../services/inferenceService');
const crypto = require('crypto');
const storeData = require('../services/storeData');

async function postPredictHandler(request, h) {
  const { image } = request.payload;
  const { model } = request.server.app;
 
  const { result, suggestion, confidenceScore } = await predictClassification(model, image);
  
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
 
  const data = {
    "id": id,
    "result": result,
    "suggestion": suggestion
  }
 
  const response = h.response({
    status: 'success',
    message: 'Good',
    data: data
  })

  await storeData(id, { result, suggestion, confidenceScore });
  response.code(201);
  return response;
}
 
module.exports = postPredictHandler;