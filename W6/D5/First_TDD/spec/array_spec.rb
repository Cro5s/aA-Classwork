require 'array' 

describe "Array Class" do 
describe "#my_uniq" do
    subject(:array) { [1, 2, 1, 3, 3] } 
    
    it "Removes all duplicates from the array" do
      expect(array.my_uniq).to eq(array.uniq)
    end
    
    it "checks to make sure #uniq is not called" do
      expect(array).not_to receive(:uniq) 
      expect(array).not_to receive(:uniq!) 
      array.my_uniq
    end
    
    it "should return a new array" do
      expect(array.my_uniq.object_id).not_to eq(array.object_id)  
    end
    
    # it "should return elements in the same order that they appeared" do
    # expect(array.my_uniq).to eq(array.uniq)
    # end
  end 
  
  describe "#two_sum" do
    subject(:array) { [-1, 0, 2, -2, 1] } 

    it "check if array length is greater than one" do
      expect(array.empty?).to eq(false)      
      # expect(array.two_sum).not_to be_empty 
    end 
    
    it "checks to see if pairs equal zero" do
        expect(array.two_sum).to eq([[0,4], [2,3]]) 
    end 

    it "make sure all inputs are integers" do 
      expect(array.all? { |el| el.class == Integer } ).to eq(true) 
    end
  end
end 

