angular.module('myApp')
	.controller('bookListCtrl', function($scope, $http) {
	$http.get('book-list.json').success(function (bookAuthor){
		$scope.books = bookList.bookList;
	}); 
});
