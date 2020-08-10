<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
  
    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
});

Route::prefix('appointment')->middleware('auth:api')->group(function ()
{
    Route::get('', 'AppointmentController@getAll');
    Route::post('create', 'AppointmentController@create');
    Route::put('{id}', 'AppointmentController@update');
    Route::delete('{id}', 'AppointmentController@delete');
    Route::get('user-appointments', 'AppointmentController@myAppointments');
});


