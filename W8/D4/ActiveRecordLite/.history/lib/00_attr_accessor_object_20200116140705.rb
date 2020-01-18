class AttrAccessorObject
  def self.my_attr_accessor(*names)
    # names = [:bee]
    names.each { |name| 

      define_method(name.to_sym) {
        name = ("@" + name.to_s).to_sym
        puts name
        instance_variable_get(name)
      }
    }
  end
end


class NewClass < AttrAccessorObject
  my_attr_accessor :bee
  # def initialize() 
  #   @bee = "bee"
  # end
end