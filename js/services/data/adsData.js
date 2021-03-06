app.factory('adsData', [ '$resource','baseServiceUrl' , function($resource, baseServiceUrl) {
	var resource = $resource(baseServiceUrl + 'ads:ad:Id', {AdId: '@id'}, {
		update: { method: 'PUT' }
	})


	function getPublicAds (params) { //pageSize, startPage
		return resource.get(params);		
	}

	function editAd (adId, ad) {
		return resource.update({ id: adId }, ad);
	}

	function getAdById (adId) {
		return resource.get({ id: adId});
	}

	function addAd (ad) {
		return resource.save(ad);
	}

	function deleteAd (ad) {
		return resource.delete({ id: adId});
	}

	return {
		getPublicAds: getPublicAds,
		edit: editAd,
		getAdById: getAdById,
		add: addAd,
		delete: deleteAd
	}
}])