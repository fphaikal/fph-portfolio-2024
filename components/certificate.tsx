'use client'

import {
  Card,
  CardFooter,
  Image,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Divider,
} from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { useState } from "react";

interface Certificate {
  name: string;
  company: string;
  year: string;
  image: string; // Menambahkan properti `image`
}

export default function Certificate({ certificate }: { certificate: Certificate[] }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const handleView = (cert: Certificate) => {
    setSelectedCertificate(cert);
    onOpen();
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        className={`${buttonStyles({ variant: "bordered", radius: "full" })} w-fit flex items-center justify-center`}
      >
        <div className="w-4 h-4">
          <img src="star.svg" className="dark:invert" />
        </div>
        <span className="text-xs">Certificate</span>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-2">
        {certificate.map((cert, index) => (
          <Card key={index} isFooterBlurred className="w-full h-[200px]">
            <Image
              removeWrapper
              alt={`${cert.name} background`}
              className="z-0 w-full h-full object-cover"
              src={cert.image} // Menggunakan properti `image`
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">{`${cert.company} - ${cert.year}`}</p>
                  <p className="text-sm text-white/60">{cert.name}</p>
                </div>
              </div>
              <Button onPress={() => handleView(cert)} radius="full" size="sm">
                View
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Certificate Details
              </ModalHeader>
              <ModalBody>
                <Image
                  removeWrapper
                  alt={`${selectedCertificate?.name} image`}
                  className="rounded-md mt-4"
                  src={selectedCertificate?.image || "placeholder.png"}
                />
                <p>
                  This certificate verifies the completion of the program "{selectedCertificate?.name}" conducted by{" "}
                  {selectedCertificate?.company}.
                </p>
                <Divider />
                <p className="font-thin">
                  {selectedCertificate?.company || "N/A"} - {selectedCertificate?.year || "N/A"}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
