get '/' do
  erb :welcome
end

post '/login' do
  user = User.find_by(email: params[:email])
  if user.authenticate(params[:password])
    session[:user_id] = user.id
    redirect '/'
  else
    erb :login
  end

end

get '/signup' do
  user = User.create(params[:user])
  session[:user_id] = user.id
  redirect '/'
end

get '/logout' do
session[:user_id] = nil
  redirect '/'
end
