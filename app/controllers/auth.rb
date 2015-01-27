get '/' do
  if current_user
    erb :home
  else
  erb :welcome
  end
end

post '/login' do
  user = User.find_by(email: params[:email])
  if user && user.password == params[:password]
    session[:user_id] = user.id
    redirect '/'
  else
    erb :login
  end

end

delete '/logout' do
session[:user_id] = nil
  redirect '/'
end

get '/register' do
  erb :register
end

post '/users' do
  user = User.create(params[:user])
  session[:user_id] = user.id
  redirect '/'
end

get '/treasures' do
  treasure = Treasure.all
  content_type :json
  treasure.to_json
end
