<?php

use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request ;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('welcome');

// Route::get('/test',   ) {

//     return response(' <p style="color: red">hello word</p>');
// });

Route::get('/welcome/{id}', [TestController::class, 'index']);
// Route::middleware('auth')
//        ->group(function () {
//     Route::get('/dashboard', 'DashboardController@index');
//     Route::get('/profile', 'ProfileController@show');
// });
