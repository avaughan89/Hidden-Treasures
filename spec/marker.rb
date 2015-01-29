
describe '/' do

  it "should display home page" do
    get '/'
    expect(last_response).to be_ok
  end
end

describe 'POST /users' do

  context "when the request has valid parameters" do
    it "creates a new users" do
      expect.to change {User.count}.by(1)
    end
  end

  context "when the request does not include a unique name value" do
    it "does not create a user" do
      post path, valid_params
      expect{post path, valid_params}.to_not change {User.count}
    end

    it "returns a status code of 422" do
      2.times {post path, valid_params}
      expect(last_response.status).to eq(422)
    end
  end
end