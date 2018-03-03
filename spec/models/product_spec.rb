require 'rails_helper'

RSpec.describe Product, type: :model do

  describe "Check validation" do
      
    context "Check validation presence" do
      it { should validate_presence_of(:name) }
      it { should validate_presence_of(:category) }
      it { should validate_presence_of(:price) }
      it { should validate_presence_of(:sale_price) }
      it { should validate_presence_of(:sale_text) }
    end
  end
end
