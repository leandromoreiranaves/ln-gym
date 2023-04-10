import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Heading, HStack, Image, VStack, Text, Icon } from "native-base";
import { Entypo } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  
};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity 
      {...rest}
    >
      <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
        <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTusEZdX1ViQAOZM4Dxsf1VG4AQOMx29y5u_A&usqp=CAU' }}
          alt="Imagem do exercício"
          w={16}
          h={16}
          rounded="md"
          mr={4}
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="white" fontFamily="heading">
            Remada unilateral
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
      
    </TouchableOpacity>
  );
}