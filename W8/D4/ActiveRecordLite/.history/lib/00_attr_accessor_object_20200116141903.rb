class AttrAccessorObject
  def self.my_attr_accessor(*names)
    # names = [:bee]
    names.each { |name| 

      define_method(name.to_sym) {
        name = ("@" + name.to_s).to_sym
        instance_variable_get(name)
      }

      define_method("#{name}=", value) {
        # name = :bee
        name = ("@" + name.to_s).to_sym
        # name = :@bee
        instance_variable_set(name, value)
      }
    }
  end

  def my_method(one_thing, another_thing)

  end
end


class NewClass < AttrAccessorObject
  my_attr_accessor :bee
  # def initialize() 
  #   @bee = "bee"
  # end
end