import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
	let errors = {};
	if(validator.isEmpty(data.entityName)) {
		errors.entityName = 'Shop/Entity Details is required';
	}
    if(validator.isEmpty(data.streetAddress1)) {
		errors.streetAddress1 = 'Street Address1 is required';
    }
    if(validator.isEmpty(data.streetAddress2)) {
		errors.streetAddress2 = 'Street Address2 is required';
	}
    if(validator.isEmpty(data.city)) {
		errors.city = 'City is required';
    }
    if(validator.isEmpty(data.states)) {
		errors.states = 'State is required';
    }
    if(validator.isEmpty(data.pinCode)) {
		errors.pinCode = 'Pin Code is required';
	}
	if(validator.isEmpty(data.chainEntity)) {
		errors.chainEntity = 'Chain Entity is required';
	}
    if(validator.isEmpty(data.openingTime)) {
		errors.openingTime = 'Opening Time is required';
	}
	if(validator.isEmpty(data.closingTime)) {
		errors.closingTime = 'Closing Time is required';
	}
	// if(validator.isEmpty(data.chainEntity)) {
	// 	errors.chainEntity = 'Chain Entity is required';
	// }
	if(validator.isEmpty(data.weeklyOffDay)) {
		errors.weeklyOffDay = 'Week Of Day is required';
	}
	if(validator.isEmpty(data.photographOutside)) {
		errors.photographOutside = 'Photograph outside is required';
	}
	if(validator.isEmpty(data.photographInside)) {
		errors.photographInside = 'Photograph inside is required';
	}
	if(validator.isEmpty(data.typeOfOutlet)) {
		errors.typeOfOutlet = 'Type of Outlet is required';
	}
	if(validator.isEmpty(data.storeFormat)) {
		errors.storeFormat = 'Store format is required';
	}
	if(validator.isEmpty(data.storeContactNo)) {
		errors.storeContactNo = 'Store Contact No is required';
	}
	if(validator.isEmpty(data.storeSize)) {
		errors.storeSize = 'Store size is required';
	}
	if(validator.isEmpty(data.storePan)) {
		errors.storePan = 'Store Pan is required';
	}
	if(validator.isEmpty(data.entityType)) {
		errors.entityType = 'Entity Type is required';
	}
	if(validator.isEmpty(data.establishmentProffType)) {
		errors.establishmentProffType = 'Establishment Proof Type is required';
	}
	if(validator.isEmpty(data.establishmentPhotoProof)) {
		errors.establishmentPhotoProof = 'Establishment Photo Proof is required';
	}
	if(validator.isEmpty(data.nameOfOwner)) {
		errors.nameOfOwner = 'Name of Owner is required';
	}
	if(validator.isEmpty(data.mobile)) {
		errors.mobile = 'Mobile No is required';
	}
	if(validator.isEmpty(data.email)) {
		errors.email = 'Email is required';
    }
    if(!validator.isEmail(data.email)) {
		errors.email = 'Email is not valid';
	}
	if(validator.isEmpty(data.gender)) {
		errors.gender = 'Gender is required';
	}
	if(validator.isEmpty(data.idProofType)) {
		errors.idProofType = 'ID Proof Type is required';
	}
	if(validator.isEmpty(data.establishmentProofNo)) {
		errors.establishmentProofNo = 'Establishment Proof No is required';
    }
    if(validator.isEmpty(data.idProofNo)) {
		errors.idProofNo = 'ID Proof No is required';
	}
	if(validator.isEmpty(data.bankName)) {
		errors.bankName = 'Bank Name is required';
	}
	if(validator.isEmpty(data.bankAccount)) {
		errors.bankAccount = 'Bank Account is required';
	}
	if(validator.isEmpty(data.ifsc)) {
		errors.ifsc = 'IFSC Code is required';
	}
	if(validator.isEmpty(data.accountHolderName)) {
		errors.accountHolderName = 'Account holder name is required';
	}
	if(validator.isEmpty(data.idProofImage)) {
		errors.idProofImage = 'ID proof image is required';
	}
    if(validator.isEmpty(data.passbookImage)) {
		errors.passbookImage = 'Passbook photo is required';
	}
    
	return {
		errors,
		isValid: isEmpty(errors)
	}
}